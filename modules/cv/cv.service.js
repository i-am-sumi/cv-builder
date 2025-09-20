import { api } from "@/utils/restClient";

export const getCVs = async () => {
  const res = await api.rest.cvs.get({ query: { page: 1, limit: 20 } });
  return res.data;
};
export const getCV = async ({ queryKey, client }) => {
  const [_key, id] = queryKey;
  console.log("id", id);
  const token = getToken();

  const res = await api.rest
    .cvs(id)
    .headers({ Authorization: getToekn(client) })
    .get();
  console.log("kj", res);
  return res.data.data;
};

export const addCV = async ({
  title,
  summary,
  targetPosition,
  customobjective,
  layoutTheme,
  colorSchema,
  fontFamily,
}) => {
  const res = await api.rest.cvs.post({
    body: {
      title: `${title}`,
      summary: `${summary}`,
      TargetPosition: `${targetPosition}`,
      customobjective: `${customobjective}`,
      layoutTheme: `${layoutTheme}`,
      colorSchema: `${colorSchema}`,
      fontFamily: `${fontFamily}`,
    },
  });
  console.log("addcv", res);
  return res.data;
};

export const updateCV = async () => {
  res = await api.rest.cvs().patch();
  console.log("updateCV", res);
  return res;
};
export const deleteCV = async () => {
  const res = await api.rest.cvs.delete();
  console.log("deleteCV", res);
  return res;
};

/*

export const updateCV = async (cv) => {
  try {
    const data = await fetcher({
      method: HTTP_METHODS.PATCH,
      path: `cv/updateCv`,
      body: cv,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCV = async (id) => {
  try {
    const data = await fetcher({
      method: HTTP_METHODS.DELETE,
      path: `cv/deleteCV`,
      body: id,
    });
    return data;
  } catch (error) {
    console.log({ error });
  }
};*/
