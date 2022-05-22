import move from "../public/assets/icon-category-movie.svg";
import series from "../public/assets/icon-category-tv.svg";
import notSave from "../public/assets/icon-bookmark-empty.svg";
import save from "../public/assets/icon-bookmark-full.svg";
import Image from "next/image";
import { getSession, signIn } from "next-auth/react";

export default function CardInfo({ item }) {
  // to show state of isBookmarked
  let imagesave;
  if (item.isBookmarked == false) {
    imagesave = notSave;
  } else imagesave = save;

  const updateSaved = async (item) => {
    // to check if logged in
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        // to update date if user logged in
        const res = await fetch(`http://localhost:4000/data/${item.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isBookmarked: item.isBookmarked === true ? false : true, // we are changing the "isBookmarked" value
          }),
        });
        item.isBookmarked === true
          ? alert(`(${item.title}) is not Saved`)
          : alert(`(${item.title}) is Saved`);

        console.log(item, ": ");
      }
    };
    securePage();
  };

  return (
    <>
      <div className="max-w-sm p-5 relative bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700 ">
        <Image
          src={item.image}
          width="328"
          height="220"
          className="rounded-t-lg"
        />

        <div
          onClick={() => updateSaved(item)}
          className=" absolute z-40  top-7 left-7  rounded-full opacity-75 dark:bg-gray-900 px-2 py-1"
        >
          <Image
            src={imagesave.src}
            width={imagesave.width}
            height={imagesave.height}
          />
        </div>

        <div className="pt-4 inline-flex">
          <p className="text-white pr-4">{item.year}</p>

          {item.category === "Movie" ? (
            <Image src={move.src} width={move.width} height={move.height} />
          ) : (
            <Image
              src={series.src}
              width={series.width}
              height={series.height}
            />
          )}

          <h6 className="text-white font-bold pl-2">{item.category}</h6>
          <p className="text-white pl-4">{item.rating}</p>
        </div>
        <h2 className="text-white font-bold py-4">{item.title}</h2>
      </div>
    </>
  );
}
