import Reting from "../Components/Reting";

export default function RetingPage() {

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      height:"100vh",
      backgroundImage:"url(https://blog.kakaocdn.net/dn/c6pAkf/btrn4rgw5la/7m06GPUMq1155ou7EEYo21/img.gif)"
    }}>
      <h1 >Reting Star Components</h1>
      <Reting></Reting>
    </div>
  );
}