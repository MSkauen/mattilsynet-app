import {fetchJson} from "./http";

const requests = {
    getAllRegistrations: async () => await fetchJson(`http://localhost:5000/produksjonsplass`),
    registrerForflytning: async (obj) => await postJson(`http://localhost:5000/registrerForflytning`, obj)
};

export default requests