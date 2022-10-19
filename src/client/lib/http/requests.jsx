import {fetchJson} from "./http";

const requests = {
    getAllRegistrations: async () => await fetchJson(`http://localhost:5000/produksjonsplass`)
};

export default requests
