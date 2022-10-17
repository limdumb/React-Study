import Rating from "../Components/Rating";

export default function RatingPage() {

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      height:"100vh",
      backgroundImage:"url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif)"
    }}>
      <h1 >Reting Star Components</h1>
      <Rating></Rating>
    </div>
  );
}