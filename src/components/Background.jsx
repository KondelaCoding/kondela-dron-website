import Background1 from "../images/background-1.png";
import Background2 from "../images/background-2.png";
import Background3 from "../images/background-3.png";
import Background4 from "../images/background-4.png";
import Background5 from "../images/background-5.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Background() {
  return (
    <Parallax pages={2}>
      <ParallaxLayer speed={0.2}>
        <img src={Background5} alt="background-5" />
      </ParallaxLayer>
      <ParallaxLayer speed={0.4}>
        <img src={Background4} alt="background-4" />
      </ParallaxLayer>
      <ParallaxLayer speed={0.6}>
        <img src={Background3} alt="background-3" />
      </ParallaxLayer>
      <ParallaxLayer speed={0.5} className="flex justify-center items-center">
        <h1 className="mb-[700px] text-4xl font-black drop-shadow-[10px_10px_10px_rgba(0,0,0,0.5)] tablet:mb-96 tablet:text-8xl laptop:mt-36 laptop:text-9xl desktop:text-[10rem]">
          KONDELA DRON
        </h1>
      </ParallaxLayer>
      <ParallaxLayer speed={0.8}>
        <img src={Background2} alt="background-2" />
      </ParallaxLayer>
      <ParallaxLayer speed={1}>
        <img src={Background1} alt="background-1" />
        <div className="bg-[#352214] w-screen pt-64">
          <h1 className="text-center text-8xl font-black drop-shadow-2xl">NEXT SECTION</h1>
          <p className="container">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sit facilis praesentium nisi dignissimos
            eveniet sunt ut excepturi eum similique delectus numquam blanditiis ad doloribus unde qui quam quaerat
            mollitia velit, error laboriosam veritatis nemo fugit iste. Cupiditate consequuntur laudantium alias eius
            esse doloremque soluta qui, sint ad pariatur fugit rerum repudiandae ipsam numquam! Repellat voluptatem,
            praesentium ex, eligendi in omnis quasi deserunt porro voluptas ullam eius consequuntur saepe unde
            dignissimos nemo odio rerum, harum nobis optio. Numquam quasi possimus deleniti animi esse, neque assumenda
            ex ad minima maxime perspiciatis quis doloribus a officiis quo inventore adipisci dolor velit dicta placeat,
            optio totam deserunt iure harum. Ipsa vero veritatis quam velit alias vitae pariatur impedit reprehenderit
            hic eligendi quas recusandae dicta rem rerum excepturi corporis asperiores, aut dolorem soluta enim nihil
            qui laborum. Iure aperiam recusandae magnam quisquam est ullam tempore delectus, dolor incidunt dolores
            magni adipisci eveniet culpa quod placeat eius illum! Perferendis blanditiis commodi alias ad? Reprehenderit
            beatae sint inventore aut consequuntur, saepe facere perspiciatis velit optio, provident voluptate, aperiam
            nesciunt quas illum. Temporibus culpa numquam, nostrum voluptatibus animi aliquam laboriosam distinctio
            iusto velit! Ea consequuntur ipsa nam ducimus quaerat hic ut saepe! Vitae possimus quidem ab cum saepe?
            Vero, quidem cupiditate. Explicabo error, cum eius, eveniet autem consequuntur rerum dignissimos magnam
            deserunt fugiat voluptates? Ab, magnam. Pariatur enim quibusdam, cum hic earum exercitationem ipsam possimus
            animi consequuntur ex at mollitia. Et, itaque doloremque, accusantium ratione beatae, illo quae accusamus at
            eveniet vel aperiam nulla autem temporibus veniam dignissimos laborum error excepturi. Quis, tempora,
            corporis commodi nam aperiam vitae aspernatur non quisquam exercitationem nostrum doloremque animi? Debitis
            sit alias mollitia dignissimos odit inventore reprehenderit, iste et ipsam. Autem ab pariatur debitis
            distinctio at repudiandae quibusdam illum dolorem provident facilis eius nam, voluptate ut inventore et
            reiciendis placeat! Iste doloribus laboriosam eligendi cumque dolor esse necessitatibus iusto labore
            distinctio nihil est, ipsam minus et autem tempora itaque, odit deserunt, placeat voluptatum quam! Animi
            reprehenderit rerum voluptates nostrum deleniti at natus maiores eveniet fuga vero minus libero
            perspiciatis, qui quod saepe hic ullam odit cumque assumenda eaque nobis adipisci temporibus incidunt. Ab
            distinctio, officiis veritatis excepturi beatae quibusdam non id quod dicta quasi vitae unde perspiciatis
            pariatur quis laboriosam enim expedita suscipit incidunt! Velit ex ad, aut molestias maiores ipsum?
            Distinctio molestias quia saepe minus consequuntur voluptate dolorum labore fugit enim? Vero deserunt ipsam
            maiores officia sapiente, iusto cumque magnam dolore animi repellat dicta soluta, voluptatibus quibusdam.
            Iure voluptas molestias dolorem quis ratione eos sit perferendis unde dolorum asperiores modi repellendus,
            laborum quod repellat necessitatibus laudantium debitis cupiditate veritatis fugiat. A facilis vel amet odit
            architecto illo, ipsa magnam omnis rerum delectus sint qui, sed reiciendis laboriosam non fuga, quibusdam
            commodi et magni! Voluptas architecto ab impedit, accusantium quae id at in incidunt earum veritatis nam aut
            quisquam amet laborum ipsum atque. Quibusdam asperiores repellat dicta labore ea enim est voluptatum in
            doloremque similique architecto, illum quae ipsam rem modi veritatis a officia cum amet veniam! Animi,
            repudiandae nam! Nulla, officia debitis magni, illum inventore autem vel dignissimos magnam, consectetur
            quasi culpa? Fuga, molestias autem ab nesciunt dolorum sit beatae inventore velit commodi, similique cum
            quibusdam doloremque dolor temporibus quas incidunt unde, perspiciatis reiciendis expedita totam. Officiis
            iusto ex animi blanditiis assumenda dolores hic? Quaerat velit enim repudiandae reiciendis itaque quis
            sapiente eaque odio tempora! Architecto labore ea tenetur odio vero, accusantium ducimus quas quod quo
            dolorem corporis magni ullam delectus quos dolores eveniet quia odit voluptatibus amet sed! Explicabo fugit
            quis dolorem maiores ipsam quasi dolorum nemo aspernatur ullam magnam maxime qui corporis aliquam, ipsum,
            harum reiciendis architecto porro.
          </p>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
