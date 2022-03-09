const META_BUCKET = "https://ewr1.vultrobjects.com/dingo-nftc-0-meta";
const PREVIEW_BUCKET = "https://ewr1.vultrobjects.com/dingo-nftc-0-preview";
const STATE_BUCKET = "https://ewr1.vultrobjects.com/dingo-nftc-0-state";
const PROFILE_BUCKET = "https://ewr1.vultrobjects.com/dingo-nftc-0-profile";
const COLLECTION_BUCKET = "https://ewr1.vultrobjects.com/dingo-nftc-0-collection";

const get = (link) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 5000);
  return fetch(link, {
    withCredentials: true,
    method: "GET",
    signal: controller.signal,
  });
};

const getMeta = async (address) => {
  const response = await get(`${META_BUCKET}/${address}`);
  if (response.status === 200) {
    return response.json();
  } else {
    return null;
  }
};

const getPreviewLink = (address) => {
  return `${PREVIEW_BUCKET}/${address}.png`;
};

const getState = async (address) => {
  const response = await get(`${STATE_BUCKET}/${address}`);
  if (response.status === 200) {
    return response.json();
  } else {
    return null;
  }
};

const getProfile = async (owner) => {
  const response = await get(`${PROFILE_BUCKET}/${owner}`);
  if (response.status === 200) {
    return response.json();
  } else {
    return null;
  }
};

const getCollection = async (handle) => {
  const response = await get(`${COLLECTION_BUCKET}/${handle}`);
  if (response.status === 200) {
    return response.json();
  } else {
    return null;
  }
};

export { getMeta, getPreviewLink, getState, getProfile, getCollection };
