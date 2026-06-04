import TutorCard from "@/components/shared/TutorCard";
import Search from "@/test/Search";
import { serverUrl } from "@/secret";
import NotFound from "@/components/shared/NotFound";

export const metadata = {
  title: "All Tutors | TutorHub",
  description: "Find your tutor and make smoth your learning journey",
};

async function TutorsPage() {
  const res = await fetch(`${serverUrl}/all-tutors`, {
    next: { revalidate: 60 },
  });
  const { tutors, success } = await res.json();

  return (
    <div className="container lg:w-[75%] mx-auto">
      <Search />
      {success ? (
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-stretch">
          {tutors.map((data, i) => {
            return <TutorCard data={data} key={data._id} />;
          })}
        </div>
      ) : (
        <NotFound message={"Tutors Not Available"} />
      )}
    </div>
  );
}

export default TutorsPage;
