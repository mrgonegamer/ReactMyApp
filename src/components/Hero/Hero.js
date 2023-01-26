export default function Hero () {

  return (
    <>
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="">
            <p class="title">
              Fullheight hero
            </p>
            <p class="subtitle">
              Fullheight subtitle
            </p>
          </div>
        </div>
      </section>
      <section style={{backgroundColor: "pink", width: "150vw", height: "100px", position: "absolute", transform: "rotate(2deg)", zIndex: "-1"}}></section>
      <section style={{height: "800px"}}></section>
    </>
  );
};