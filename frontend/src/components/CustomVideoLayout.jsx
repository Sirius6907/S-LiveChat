import { SpeakerLayout } from "@stream-io/video-react-sdk";
import { useCall } from "@stream-io/video-react-sdk";

const CustomVideoLayout = () => {
  const call = useCall();
  const localParticipant = call?.state.localParticipant;

  // Apply custom styles to fix mirroring only for local participant
  const customStyles = {
    ".str-video__participant-view": {
      "&[data-local='true']": {
        transform: "scaleX(-1)", // This will flip the local video horizontally
      },
    },
  };

  return <SpeakerLayout customStyles={customStyles} />;
};

export default CustomVideoLayout;