import API from "@retisio/api";
// import { getCookie } from "../../shared/util";
export const SynonymsService = {
  getLockStatus(id, query) {
    let Chnl = JSON.parse(localStorage.getItem('AssestGroup'));
    return API.get(`/api/search-config/api/v1/asset-locks/synonym/${id}`,
      { query: {...query}, header: { "X-Chnl-Id": Chnl?.id }});
  }
};