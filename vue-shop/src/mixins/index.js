import axios from "axios";

export default {
  methods: {
    async $api(url, data) {
      let result = await axios({
        method: "post",
        url: url,
        data: data,
      });
      console.log(result);
      return result.data;
    },
  },
};
