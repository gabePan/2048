
// composer info object
var composerInfo = {
  2: {
    familyName: "Shostakovich",
    firstName: "Dmitri",
    nationality: "Russian",
    jobs: [ "pianist" ],
    lived: "1906-1975",
    comments: "Prominent figure of 20th century music.",
    works: [
      "Symphony No. 5 in D major, Op. 47",
      "Symphony No. 7 in C major, Op. 60 (Leningrad)",
      "Cello Concerto No. 1 in E-flat major, Op. 107"
    ]
  },
  4: {
    familyName: "Rachmaninov",
    firstName: "Sergei",
    nationality: "Russian",
    jobs: [ "pianist", "conductor" ],
    lived: "1873-1943",
    comments: "One of the greatest pianists of his era, and one of the last great representatives of Romanticism in Russian classical music.",
    works: [
      "Piano Concerto No. 2 in C minor, Op. 18",
      "Rhapsody on a Theme of Paganini, Op. 43"
    ]
  },
  8: {
    familyName: "Wagner",
    firstName: "Richard",
    nationality: "German",
    jobs: [ "theatre director", "polemicist", "conductor" ],
    lived: "1813-1883",
    comments: "Revolutionized opera through his concept of the Gesamtkunstwerk (total work of art).",
    works: [
      "Tannhauser",
      "Lohengrin",
      "The Ring cycle"
    ]
  },
  16: {
    familyName: "Brahms",
    firstName: "Johannes",
    nationality: "German",
    jobs: [ "pianist" ],
    lived: "1833-1897",
    comments: "Both a traditionalist and innovator of the Romantic era, he is a master in the structures and compositional techniques, and his work has inspired generations of classical composers.",
    works: [
      "Variations on a Theme by Haydn, Op. 56a",
      "Symphony No. 1 in C minor, Op. 68",
      "Violin Concerto in D major, Op. 77"
    ]
  },
  32: {
    familyName: "Mendelssohn",
    firstName: "Felix",
    nationality: "German",
    jobs: [ "pianist", "organist", "conductor" ],
    lived: "1809-1847",
    comments: "Born into a prominent family and recognised early as a musical prodigy, he is one of the most popular composers of the early Romantic period.",
    works: [
      "A Midsummer Night's Dream, Op. 61",
      "Violin Concerto in E minor, Op. 64",
      "Symphony No. 4 in A major, Op. 90 (Italian)"
    ]
  },
  64: {
    familyName: "Schubert",
    firstName: "Franz",
    nationality: "Austrian",
    jobs: [],
    lived: "1797-1828",
    comments: "One of the most prolific composers of the late Classical / early Romanic era despite his short life, especially well known for his secular vocal works.",
    works: [
      "Piano Quintet in A major, D. 667 (The Trout)",
      "Symphony No. 8 in B minor, D. 759 (Unfinished)",
      "Schwanengesang (Swan song), D. 957"
    ]
  },
  128: {
    familyName: "Beethoven",
    firstName: "Ludwig van",
    nationality: "German",
    jobs: [ "pianist" ],
    lived: "1770-1827",
    comments: "A crucial figure in the transition between the Classical and Romantic eras, and one of the most famous and influential of all composers.",
    works: [
      "Piano Sonata No. 14 in C-sharp minor, Op. 27, No. 2 (Moonlight)",
      "Piano Concerto No. 5 in E-flat major, Op. 73 (Emperor)",
      "Symphony No. 9 in D minor, Op. 125 (Choral)"
    ]
  },
  256: {
    familyName: "Mozart",
    firstName: "Wolfgang Amadeus",
    nationality: "Austrian",
    jobs: [ "pianist" ],
    lived: "1756-1791",
    comments: "A prolific composer and musical prodigy, he is widely recognized as one of the greatest composers in the history of Western music.",
    works: [
      "Symphony No. 25 in G minor, K. 183 (little G minor)",
      "Piano Concerto No. 24 in C minor, K. 491",
      "Seranade No. 13 for strings in G major, K. 525 (Eine kleine Nachtmusik)",
      "The Magic Flute, K. 620"
    ]
  },
  512: {
    familyName: "Haydn",
    firstName: "Franz Joseph",
    nationality: "Austrian",
    jobs: [ ],
    lived: "1732-1809",
    comments: "An influential composer of the Classical period, he is known as the 'Father of the Symphony' and 'Father of the String Quartet' due to his contributions to their musical forms.",
    works: [
      "String Quartet No. 62 in C major, Op. 76, No. 3 (Emperor)",
      "Symphony No. 94 in G major, Hob. 1/94 (Surprise)",
      "The Creation, Hob. 21/2"
    ]
  },
  1024: {
    familyName: "Vivaldi",
    firstName: "Antonio",
    nationality: "Italian",
    jobs: [ "violinist", "teacher", "cleric" ],
    lived: "1678-1741",
    comments: "A prolific artist who produced hundreds of concertos, he is one of the greatest Baroque composers.",
    works: [
      "Concerto No. 1 in E major, Op. 8, RV 269 (Spring)",
      "Concerto No. 2 in G minor, Op. 8, RV 315 (Summer)",
      "Concerto No. 3 in F major, Op. 8, RV 293 (Autumn)",
      "Concerto No. 4 in F minor, Op. 8, RV 297 (Winter)"
    ]
  },
  2048: {
    familyName: "Bach",
    firstName: "Johann Sebastian",
    nationality: "German",
    jobs: [ ],
    lived: "1685-1750",
    comments: "An extremely influential composer of the Baroque period, his music is revered for its technical command and artistic beauty.",
    works: [
      "Toccata and Fugue in D minor, BWV 565",
      "Goldberg Variations, BWV 988",
      "10th movement of Heart and Mouth and Deed and Life, BWV 147 (Jesu, Joy of Man's Desiring)"
    ]
  }
};

var overlay;

// remove overlay when clicked
var hideOverlay = function () {
  overlay.remove();
};

// formats overlay
var formatInfoScreen = function( key ) {
//  console.log( composerInfo[ key ].familyName );

  overlay = document.createElement( "div" );
  var image = document.createElement( "img" );
  var p0 = document.createElement( "p" );
  var p1 = document.createElement( "p" );
  var p2 = document.createElement( "p" );
  var p3 = document.createElement( "p" );

  image.src = "tile-sets/composers/" + key + ".jpg";

  overlay.id = "overlay";
  overlay.style.display = "block";
  overlay.onclick = hideOverlay;

  // set up p's for information display
  var formattedJobs = composerInfo[ key ].nationality + " composer";
  for( index in composerInfo[ key ].jobs ) {
    formattedJobs = formattedJobs + ", " + composerInfo[ key ].jobs[ index ];
  }

  var formattedWorks = "Famous for a large number of pieces, including:"
  for( index in composerInfo[ key ].works ) {
    formattedWorks = formattedWorks + "<br>"
      + composerInfo[ key ].works[ index ];
  }

  p0.innerHTML = "Representing tile [" + key + "]:";
  p1.innerHTML = "<strong>" + composerInfo[ key ].familyName + ", "
    + composerInfo[ key ].firstName + "</strong><br>"
    + formattedJobs
    + " (" + composerInfo[ key ].lived + ")";
  p2.innerHTML = composerInfo[ key ].comments;
  p3.innerHTML = formattedWorks;

  // append elements
  overlay.appendChild( image );
  overlay.appendChild( p0 );
  overlay.appendChild( p1 );
  overlay.appendChild( p2 );
  overlay.appendChild( p3 );
  document.body.appendChild( overlay );
};

// called when composer portrait is clicked
var showWho = function () {
  var composerName = this.innerHTML;

  switch( composerName ) {
    case (valueMap[2]):
      formatInfoScreen( 2 );
      break;
    case (valueMap[4]):
      formatInfoScreen( 4 );
      break;
    case (valueMap[8]):
      formatInfoScreen( 8 );
      break;
    case (valueMap[16]):
      formatInfoScreen( 16 );
      break;
    case (valueMap[32]):
      formatInfoScreen( 32 );
      break;
    case (valueMap[64]):
      formatInfoScreen( 64 );
      break;
    case (valueMap[128]):
      formatInfoScreen( 128 );
      break;
    case (valueMap[256]):
      formatInfoScreen( 256 );
      break;
    case (valueMap[512]):
      formatInfoScreen( 512 );
      break;
    case (valueMap[1024]):
      formatInfoScreen( 1024 );
      break;
    case (valueMap[2048]):
      formatInfoScreen( 2048 );
      break;
    default:
      console.log( "Unimplemented composer" );
      break;
  }
}

