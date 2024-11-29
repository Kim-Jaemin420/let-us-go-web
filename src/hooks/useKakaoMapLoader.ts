import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

const useKakaoLoader = () => {
  useKakaoLoaderOrigin({
    appkey: import.meta.env.VITE_APP_KAKAO_MAP_API,
    libraries: ["clusterer", "drawing", "services"],
  });
};

export default useKakaoLoader;
