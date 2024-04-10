import Heading from "@/comoponents/Heading";
import getReview, { getSlugs } from "@/lib/reviews";

export async function generateStaticParams(){
  const slugs = await getSlugs();
  return slugs.map((slug)=>({slug}))
}

const ReviewPage = async ({ params: { slug } }) => {
  const review = await getReview(slug);
  console.log(slug ,"slug");
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="italic pb-2">{review.date}</p>
      <img
        src={review.image}
        alt="stardewvalley"
        className="h-40 rounded sm:rounded-l"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose"
      />
    </>
  );
};

export default ReviewPage;
