import TutorCard from "@/components/shared/TutorCard";
import { serverUrl } from "@/secret";
import NotFound from "@/components/shared/NotFound";
import Search from "@/components/clients/Search";

export const metadata = {
  title: "All Tutors | TutorHub",
  description: "Find your tutor and make smoth your learning journey",
};

async function TutorsPage({ searchParams }) {
  const params = await searchParams;
  const res = await fetch(`${serverUrl}/all-tutors`, {
    next: { revalidate: 60 },
  });
  const { tutors, success } = await res.json();

  const { search, from, to } = params;

  // const filtered =
  const filteredTutors = tutors
    ? tutors.filter((tutor) => {
        // Search Name Filter
        if (
          search &&
          !tutor.tutorName
            ?.toLowerCase()
            .includes(search.toLowerCase().trim()) &&
          !tutor.subject?.toLowerCase().includes(search.toLowerCase().trim())
        ) {
          return false;
        }
        // Date/Session Filter
        if (from && tutor.sessionStart < from) {
          return false;
        }
        if (to && tutor.sessionStart > to) {
          return false;
        }
        return true;
      })
    : [];

  if (search || from) {
    return (
      <div className="container lg:w-[75%] mx-auto">
        <Search />
        {filteredTutors.length > 0 ? (
          <div className="pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-stretch">
            {filteredTutors.map((data, i) => {
              return <TutorCard data={data} key={data._id} />;
            })}
          </div>
        ) : (
          <NotFound message={"Tutors Not Found"} />
        )}
      </div>
    );
  } else {
    return (
      <div className="container lg:w-[75%] mx-auto">
        <Search />
        {success ? (
          <div className="pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-stretch">
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
}

export default TutorsPage;
