import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns';
import InfoCard from "../components/infoCard";
import Map from "../components/Map";

function Search({ searchResults }) {
    console.log(searchResults);

    const router = useRouter();
    const { location, startDate, endDate, numberOfGuests } = router.query;

    const formattedStartDate = format(new Date(startDate), 'MMM dd, yyyy');
    const formattedEndDate = format(new Date(endDate), 'MMM dd, yyyy');

    const range = `${formattedStartDate} - ${formattedEndDate}`

    console.log(router.query);

    return (
        <div className="">
            <Header placeholder={` ${location} | ${range} | ${numberOfGuests} guests`}/>
            
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-s">300+ Stays - {range} - {numberOfGuests} Guests </p>

                    <h1 className="text-4xl font-semibold mt-2     mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>

                        <p className="button">Price</p>

                        <p className="button">Instant Book</p>

                        <p className="button">Rooms and Bed</p>

                        <p className="button">More Filters</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map(({ img, location, title, description, star, price, total }) => (
                        <InfoCard 
                            key={img}
                            img={img}
                            location={location}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                         />
                    ))}
                    </div>
                </section>

                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <Map searchResults={searchResults} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch ("https://links.papareact.com/isz").then(res => res.json());
    return {
        props: {
            searchResults,
        },
    };
}
