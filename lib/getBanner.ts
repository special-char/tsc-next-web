import axiosInstance from './axiosInstance';

export async function getBannerData() {
  try {
    return await axiosInstance.post('/', {
      query: `{
            banner {
              data {
                attributes {
                  title
                  description
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  buttons {
                    id
                    text
                    url
                  }
                }
              }
            }
          }`,
    });
  } catch (error) {}
}
