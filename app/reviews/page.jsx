import React from "react";
import Link from "next/link";
import Heading from "@/comoponents/Heading";
import { getReviews } from "@/lib/reviews";

export default async function Reviewspage() {
  const reviews = await getReviews()
  return (
    <>
      <Heading>This is Review Page</Heading>
      <ul className="flex flex-row gap-3">
        {reviews.map((review)=>(
        <li className="border w-80 bg-white " key={review.slug}>
          <Link href={`/reviews/${review.slug}`}>
            <img
              src={review.image}
              className="h-40 rounded sm:rounded-l"
              alt="e_commerce"
            />
            <h2 className="py-1 text-center">
            {review.title}
            </h2>
          </Link>
        </li>
        ))}
      </ul>
    </>
  );
}
