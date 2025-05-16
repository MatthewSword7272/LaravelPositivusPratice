import Button from "./components/Button";
import Header from "./components/Header";
import Link from "./components/Link";

function App() {
  return (
    <main className={"container mx-auto px-5 space-y-16"}>
      <Header></Header>
      <section className={"flex max-md:flex-col items-center justify-between"}>
        <div className={"lg:w-2/5 flex flex-col gap-y-9 lg:items-start"}>
          <h1 className={"font-semibold"}>
            Navigating the digital landscape for success
          </h1>
          <div className={"lg:hidden"}>
            <img src="/HeroImage.png" alt="" />
          </div>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button style={"dark"}>Book a consultation</Button>
        </div>
        <div className={"max-lg:hidden"}>
          <img src="/HeroImage.png" alt="" />
        </div>
      </section>
      <section
        className={
          "flex justify-between grayscale overflow-hidden max-lg:hidden"
        }
      >
        <img src="/amazon.png" alt="" />
        <img src="/dribbble.png" alt="" />
        <img src="/hubspot.png" alt="" />
        <img src="/notion.png" alt="" />
        <img src="/netflix.png" alt="" />
        <img src="/zoom.png" alt="" />
      </section>
      <section
        className={
          "flex flex-col justify-between grayscale overflow-hidden lg:hidden"
        }
      >
        <div className={"flex gap-10 justify-end "}>
          <img src="/amazon.png" alt="" />
          <img src="/dribbble.png" alt="" />
          <img src="/hubspot.png" alt="" />
        </div>
        <div className={"flex gap-10"}>
          <img src="/notion.png" alt="" />
          <img src="/netflix.png" alt="" />
          <img src="/zoom.png" alt="" />
        </div>
      </section>
    </main>
  );
}

export default App;
