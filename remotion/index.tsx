import { registerRoot } from "remotion";
import { Composition } from "remotion";
import { HeroVideo } from "./HeroVideo";

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="HeroVideo"
        component={HeroVideo}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={900}
      />
    </>
  );
};

registerRoot(RemotionRoot);
