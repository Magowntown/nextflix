import { Media } from "../../models/index.js";

class MediaSeeder {
  static async seed() {
    const mediaData = [{
      poster: "https://scdn.nflximg.net/ipl/52911/91a8a4ec55518f9d4e42a5441b67cb732e9b657a.jpg"
      ,
      title: "Out for a Kill",
      synopsis: "In China, Robert Burns digs up a treasure trove of artifacts and discovers they&#39;re the kind the Chinese mafia use to spirit drugs out of the country.",
      avgrating: "3.2870402",
      type: "movie",
      released: "2003",
      runtime: "1h30m"
    },
    {
      poster: "http://art-2.nflximg.net/63fac/79c52ccb0931cc50f51fd8922ecaef551d263fac.jpg",
      title: "Pray For Rain",
      synopsis: "Following her father&#39;s suspicious death, a New York journalist returns to her hometown, where drought and gangs have decimated the farming community.",
      avgrating: "0",
      type: "movie",
      released: "2017",
      runtime: "1h32m"
    },
    {
      poster: "http://art-0.nflximg.net/41ba8/0dea3ca74d5b5f36759919dff2a6dd4516341ba8.jpg",
      title: "A Fairy Tale Wedding",
      synopsis: "Twenty years after high school, a man invites his less successful pals to his resort wedding, where some old high jinks could help them all grow up.",
      avgrating: "0",
      type: "movie",
      released: "2014",
      runtime: "1h32min"
    },
    {
      poster: "http://art-1.nflximg.net/f9145/e87a5a4862ddf9e98fcca66780b02d4de44f9145.jpg",
      title: "The Jungle",
      synopsis: "While a documentary team searches remote parts of the Indonesian jungle looking for an endangered leopard, they soon realize they&#39;re being stalked.",
      avgrating: "4.5",
      type: "movie",
      released: "2014",
      runtime: "1h24m"
    }
  ];

  for (const singleMediaData of mediaData) {
    const currentMedia = await Media.query().findOne({ title: singleMediaData.title });
    if(!currentMedia) {
      await Media.query().insert(singleMediaData);
      }
    }
  }
}

export default MediaSeeder;