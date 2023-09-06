import { Input, Typography, List, Card, Image, Space } from 'antd'
import React, { useState, useEffect } from 'react'

function Index () {
  const [searchTerm, setSearchTerm] = useState()
  const [dataSource, setDataSource] = useState([])
  const [loading, setLoading] = useState(false)
  const [previewImages, setPreviewImages] = useState([])

  useEffect(() => {
    if (searchTerm) {
      setLoading(true)
      fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
        .then(resp => resp.json())
        .then(data => {
          setLoading(false)
          console.log('data...', data)
          setDataSource(data?.products)
        })
    } else {
      setLoading(true)
      fetch(`https://dummyjson.com/products`)
        .then(resp => resp.json())
        .then(data => {
          setLoading(false)
          setDataSource(data?.products)
        })
    }
  }, [searchTerm])

  console.log('searchTerm,dataSource...', searchTerm, dataSource)
  return (
    <Space style={{ padding: '0px 10px' }} direction='vertical'>
      <Typography.Title
        style={{ textAlign: 'center', fontFamily: 'monospace' }}
      >
        Image Gallery
      </Typography.Title>
      <Input.Search
        style={{ maxWidth: 500, display: 'flex', margin: 'auto' }}
        onSearch={value => setSearchTerm(value)}
        allowClear
      ></Input.Search>
      <Typography.Text>
        Showing Results for {searchTerm || 'All'}
        {` - ${dataSource.length}`}
      </Typography.Text>
      <List
        loading={loading}
        dataSource={dataSource}
        grid={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
        renderItem={item => (
          <Card
            key={item.id}
            style={{ height: 300, margin: 12, overflow: 'hidden' }}
            hoverable={true}
          >
            <Image
              src={item.thumbnail}
              preview={{ visible: false }}
              onClick={() => setPreviewImages(item.images)}
            ></Image>
          </Card>
        )}
      ></List>
      {previewImages.length > 0 ? (
        <Image.PreviewGroup
          preview={{
            visible: previewImages.length ? true : false,
            onVisibleChange: value => {
              if (!value) {
                setPreviewImages([])
              }
            }
          }}
        >
          {previewImages.map(image => (
            <Image src={image}></Image>
          ))}
        </Image.PreviewGroup>
      ) : null}
    </Space>
  )
}

export default Index
