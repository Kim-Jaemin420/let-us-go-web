import { css } from "@styled-system/css";
import useKakaoMapLoader from "@/hooks/useKakaoMapLoader";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { forwardRef } from "react";

const KUNKUK_UNIVERSITY_POSITION = {
  lat: 37.541977858845584,
  lng: 127.07803595735432,
};

const Location = forwardRef<HTMLDivElement>((_props, ref) => {
  useKakaoMapLoader();

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.title}>location</div>
      <div className={styles.description}>
        건국대학교 서울캠퍼스 제 1학생회관에서{"\n"}3월 30일에 만나요!
      </div>
      <div className={styles.mapContainer}>
        <Map
          id="map"
          center={KUNKUK_UNIVERSITY_POSITION}
          level={4}
          style={{
            width: "100%",
            maxWidth: "121.4rem",
            paddingBottom: "54.36%",
            borderRadius: "2rem",
            height: "auto",
            maxHeight: "66rem",
          }}
        >
          <MapMarker position={KUNKUK_UNIVERSITY_POSITION} />
        </Map>
      </div>
    </div>
  );
});

export default Location;

const styles = {
  container: css({
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    paddingTop: "24rem",

    "@media (max-width: 768px)": {
      paddingTop: "10rem",
    },
  }),
  title: css({
    textTransform: "uppercase",
    fontSize: "5.6rem",
    color: "primary.200",
    fontWeight: 700,
    marginBottom: "6.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      fontWeight: 800,
      marginBottom: "3.6rem",
    },
  }),
  description: css({
    fontSize: "3.6rem",
    fontWeight: 600,
    marginBottom: "5.2rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      marginBottom: "1.2rem",
      whiteSpace: "pre-wrap",
      textAlign: "center",
    },
  }),
  mapContainer: css({
    width: "calc(100vw - 6.4rem)",
    borderRadius: "2rem",
    maxWidth: "121.4rem",
    height: "auto",
    maxHeight: "66rem",
    margin: "0 3.2rem",
    marginBottom: "24rem",

    "@media (max-width: 768px)": {
      width: "calc(100vw - 4rem)",
      borderRadius: "0.8rem",
      marginBottom: "10rem",
    },
  }),
  map: css.raw({
    borderRadius: "2rem",
  }),
};
