function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  
    return array;
  }
  
//SHOTTIPYÖRÄYTYS

  function shottinappula() {
    wheel.play();
    // Variable initialization
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";

    let Shotti1 = shuffle([2065, 2066,	2067,	2068, 2069]);
    let Shotti2 = shuffle([2155,	2156,	2157,	2158,	2159]);
    let Shotti3 = shuffle([2245,	2246,	2247,	2248,	2249]);
    let Shotti4 = shuffle([2335,	2336,	2337,	2338,	2339]);

    let Hasil = shuffle([

Shotti1[0],
Shotti2[0],
Shotti3[0],
Shotti4[0],

    ]);

    if (Shotti1.includes(Hasil[0])) SelectedItem = "Shotti";
    if (Shotti2.includes(Hasil[0])) SelectedItem = "Shotti";
    if (Shotti3.includes(Hasil[0])) SelectedItem = "Shotti";
    if (Shotti4.includes(Hasil[0])) SelectedItem = "Shotti";

        // Process
        box.style.setProperty("transition", "all ease 5s");
        box.style.transform = "rotate(" + Hasil[0] + "deg)";
        element.classList.remove("animate");
        setTimeout(function () {
          element.classList.add("animate");
        }, 5000);

            // Process
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + Hasil[0] + "deg)";
    element.classList.remove("animate");

    
    setTimeout(function () {
      element.classList.add("animate");
    }, 5000);
  
    // Raise an Alert
    setTimeout(function () {
  
      if (Shotti1.includes(Hasil[0])) {
        perusvoitto.play();
        Swal.fire(
          {
          imageUrl: "tequila.png",
          imageHeight: 350,
          title: SelectedItem + "!",
          color: "white",
          confirmButtonColor: "#ff22e2",
          background: "transparent",
          showConfirmButton: false,
          backdrop: `
          transparent
          `
        })
      }

      if (Shotti2.includes(Hasil[0])) {
        perusvoitto.play();
        Swal.fire(
          {
          imageUrl: "tequila.png",
          imageHeight: 350,
          title: SelectedItem + "!",
          color: "white",
          confirmButtonColor: "#ff22e2",
          background: "transparent",
          showConfirmButton: false,
          backdrop: `
          transparent
          `
        })
      }

      if (Shotti3.includes(Hasil[0])) {
        perusvoitto.play();
        Swal.fire(
          {
          imageUrl: "tequila.png",
          imageHeight: 350,
          title: SelectedItem + "!",
          color: "white",
          confirmButtonColor: "#ff22e2",
          background: "transparent",
          showConfirmButton: false,
          backdrop: `
          transparent
          `
        })
      }

      if (Shotti4.includes(Hasil[0])) {
        perusvoitto.play();
        Swal.fire(
          {
          imageUrl: "tequila.png",
          imageHeight: 350,
          title: SelectedItem + "!",
          color: "white",
          confirmButtonColor: "#ff22e2",
          background: "transparent",
          showConfirmButton: false,
          backdrop: `
          transparent
          `
        })
      }
    }, 5500);
    /*
      // Delay and set to normal state
      setTimeout(function () {
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
      }, 6000);
    */
    }

  
//EI VOITTOA & JUO

  function spin() {
    // Play the sound
    wheel.play();
    // Variable initialization
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";
  
    // Shuffle 450 because class box1 has been added 90 degrees at the beginning. minus 40 per item so that the arrow position fits in the middle.
    // Each item has a 12.5% ​​win rate except the bicycle item which only has about a 4% chance of winning.
    // Items in the form of iPads and Samsung Tabs will never win.
    // let Sepeda = shuffle([2210]); //Possibility: 33% or 1/3
  
  //Millisekunnit alkureuna-päätyreuna
//2404
      let Eivoittoa1 = shuffle([2071,	2072,	2073,	2074,	2075,	2076,	2077,	2078,	2079,	2080,	2081,	2082,	2083,	2084,	2085,	2086,	2087,	2088,	2089]);
      let Juo4 = shuffle([2091,	2092,	2093,	2094,	2095,	2096,	2097,	2098,	2099,	2100,	2101,	2102,	2103, 2104,	2105,	2106]);
      let Eivoittoa2 = shuffle([2108,	2109,	2110,	2111,	2112,	2113,	2114,	2115,	2116,	2117,	2118,	2119,	2120,	2121,	2122,	2123,	2124,	2125,	2126,	2127,	2128,	2129,	2130,	2131,	2132,	2133]);
      let Juo3 = shuffle([2135,	2136,	2137,	2138,	2139,	2140,	2141, 2142,	2143,	2144,	2145,	2146,	2147,	2148,	2149,	2150,	2151,	2152,	2153,	2154]);
      let Eivoittoa3 = shuffle([2161,	2162,	2163,	2164,	2165,	2166,	2167,	2168,	2169,	2170,	2171,	2172,	2173,	2174,	2175,	2176,	2177,	2178,	2179,	2180,	2181,	2182,	2183]);
      let Juo2 = shuffle([2185,	2186,	2187,	2188,	2189,	2190,	2191,	2192,	2193,	2194,	2195,	2196,	2197,	2198,	2199,	2200,	2201,	2202,	2203,	2204]);
      let Eivoittoa4 = shuffle([2206,	2207,	2208,	2209,	2210,	2211,	2212,	2213,	2214,	2215,	2216,	2217,	2218,	2219,	2220,	2221,	2222,	2223]);
      let Juo1 = shuffle([2224,	2225,	2226,	2227,	2228,	2229,	2230,	2231,	2232,	2233,	2234,	2235,	2236,	2237,	2238,	2239,	2240,	2241,	2242,	2243,	2244]);
      let Eivoittoa5 = shuffle([2251,	2252,	2253,	2254,	2255,	2256,	2257,	2258,	2259,	2260,	2261,	2262,	2263,	2264,	2265,	2266,	2267,	2268,	2269]);
      let Juo4b = shuffle([2271,	2272,	2273,	2274,	2275,	2276,	2277,	2278,	2279,	2280,	2281,	2282,	2283,	2284,	2285,	2286,	2287]);
      let Eivoittoa6 = shuffle([2289,	2290,	2291,	2292,	2293,	2294,	2295,	2296,	2297,	2298,	2299,	2300,	2301,	2302,	2303,	2304,	2305,	2306,	2307,	2308,	2309,	2310,	2311,	2312]);
      let Juo3b = shuffle([2314,	2315,	2316,	2317,	2318,	2319,	2320,	2321,	2322,	2323,	2324,	2325,	2326,	2327,	2328,	2329,	2330,	2331,	2332,	2333,	2334]);
      let Eivoittoa7 = shuffle([2341,	2342,	2343,	2344,	2345,	2346,	2347,	2348,	2349,	2350,	2351,	2352,	2353,	2354,	2355,	2356,	2357,	2358,	2359,	2360,	2361,	2362,	2363]);
      let Juo2b = shuffle([2365,	2366,	2367,	2368,	2369,	2370,	2371,	2372,	2373,	2374,	2375,	2376,	2377,	2378, 2379,	2380,	2381,	2382,	2383,	2384]);
      let Eivoittoa8 = shuffle([2386,	2387,	2388,	2389,	2390,	2391,	2392,	2393,	2394,	2395,	2396,	2397,	2398,	2399,	2400,	2401,	2402,	2403]);
      let Juo1b = shuffle([2404,	2405,	2406,	2407,	2408,	2409,	2410,	2411,	2412,	2413,	2414,	2415,	2416,	2417,	2418,	2419,	2420,	2421,	2422,	2423,	2424]);

    // Random shape
    let Hasil = shuffle([
     
  
  //VOITTOMAHDOLLISUUDET 
      

Eivoittoa1[0],
Juo4[0],
Eivoittoa2[0],
Juo3[0],
Eivoittoa3[0],
Juo2[0],
Eivoittoa4[0],
Juo1[0],
Eivoittoa5[0],
Juo4b[0],
Eivoittoa6[0],
Juo3b[0],
Eivoittoa7[0],
Juo2b[0],
Eivoittoa8[0],
Juo1b[0],

  ]);
  
    // console.log(Hasil[0]);
  
    // Retrieve the value of the selected item
  
  
    if (Eivoittoa1.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (Juo4.includes(Hasil[0])) SelectedItem = "Juo 4";
    if (Eivoittoa2.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (Juo3.includes(Hasil[0])) SelectedItem = "Juo 3";
    if (Eivoittoa3.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (Juo2.includes(Hasil[0])) SelectedItem = "Juo 2";  
    if (Eivoittoa4.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (Juo1.includes(Hasil[0])) SelectedItem = "Juo 1";  
    if (Eivoittoa5.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (Juo4b.includes(Hasil[0])) SelectedItem = "Juo 4";
    if (Eivoittoa6.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (Juo3b.includes(Hasil[0])) SelectedItem = "Juo 3";
    if (Eivoittoa7.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (Juo2b.includes(Hasil[0])) SelectedItem = "Juo 2";
    if (Eivoittoa8.includes(Hasil[0])) SelectedItem = "Ei voittoa";
    if (Juo1b.includes(Hasil[0])) SelectedItem = "Juo 1";

    // Process
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + Hasil[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function () {
      element.classList.add("animate");
    }, 5000);
  
    // Raise an Alert
    setTimeout(function () {

//EI VOITTOA 1
      if (Eivoittoa1.includes(Hasil[0])) {
        eivoittoa.play();
        Swal.fire(
          {
          imageUrl: "eivoittoa.png",
          imageHeight: 250,
          title: SelectedItem + "!",
          color: "white",
          confirmButtonColor: "#ff22e2",
          background: "transparent",
          showConfirmButton: false,
          backdrop: `
          transparent
          `
        })
      }

// JUO4
  if (Juo4.includes(Hasil[0])) {
    openbeer.play();
    Swal.fire(
      {
      imageUrl: "olut.png",
      imageHeight: 350,
      title: SelectedItem + "!",
      color: "white",
      confirmButtonColor: "#ff22e2",
      background: "transparent",
      showConfirmButton: false,
      backdrop: `
      transparent
      `
    })
  }

//EI VOITTOA 2
if (Eivoittoa2.includes(Hasil[0])) {
  eivoittoa.play();
  Swal.fire(
    {
    imageUrl: "eivoittoa.png",
    imageHeight: 250,
    title: SelectedItem + "!",
    color: "white",
    confirmButtonColor: "#ff22e2",
    background: "transparent",
    showConfirmButton: false,
    backdrop: `
    transparent
    `
  })
}

// JUO3
if (Juo3.includes(Hasil[0])) {
  openbeer.play();
  Swal.fire(
    {
    imageUrl: "olut.png",
    imageHeight: 350,
    title: SelectedItem + "!",
    color: "white",
    confirmButtonColor: "#ff22e2",
    background: "transparent",
    showConfirmButton: false,
    backdrop: `
    transparent
    `
  })
}


//EI VOITTOA 3
if (Eivoittoa3.includes(Hasil[0])) {
  eivoittoa.play();
  Swal.fire(
    {
    imageUrl: "eivoittoa.png",
    imageHeight: 250,
    title: SelectedItem + "!",
    color: "white",
    confirmButtonColor: "#ff22e2",
    background: "transparent",
    showConfirmButton: false,
    backdrop: `
    transparent
    `
  })
}

// JUO2
if (Juo2.includes(Hasil[0])) {
  openbeer.play();
  Swal.fire(
    {
    imageUrl: "olut.png",
    imageHeight: 350,
    title: SelectedItem + "!",
    color: "white",
    confirmButtonColor: "#ff22e2",
    background: "transparent",
    showConfirmButton: false,
    backdrop: `
    transparent
    `
  })
}

//EI VOITTOA 4
if (Eivoittoa4.includes(Hasil[0])) {
  eivoittoa.play();
  Swal.fire(
    {
    imageUrl: "eivoittoa.png",
    imageHeight: 250,
    title: SelectedItem + "!",
    color: "white",
    confirmButtonColor: "#ff22e2",
    background: "transparent",
    showConfirmButton: false,
    backdrop: `
    transparent
    `
  })
}
// JUO1
if (Juo1.includes(Hasil[0])) {
  openbeer.play();
  Swal.fire(
    {
    imageUrl: "olut.png",
    imageHeight: 350,
    title: SelectedItem + "!",
    color: "white",
    confirmButtonColor: "#ff22e2",
    background: "transparent",
    showConfirmButton: false,
    backdrop: `
    transparent
    `
  })
}
//EI VOITTOA 5
if (Eivoittoa5.includes(Hasil[0])) {
  eivoittoa.play();
  Swal.fire(
    {
    imageUrl: "eivoittoa.png",
    imageHeight: 250,
    title: SelectedItem + "!",
    color: "white",
    confirmButtonColor: "#ff22e2",
    background: "transparent",
    showConfirmButton: false,
    backdrop: `
    transparent
    `
  })
}
// JUO4b
if (Juo4b.includes(Hasil[0])) {
  openbeer.play();
  Swal.fire(
    {
    imageUrl: "olut.png",
    imageHeight: 350,
    title: SelectedItem + "!",
    color: "white",
    confirmButtonColor: "#ff22e2",
    background: "transparent",
    showConfirmButton: false,
    backdrop: `
    transparent
    `
  })
}
//EI VOITTOA 6
if (Eivoittoa6.includes(Hasil[0])) {
  eivoittoa.play();
  Swal.fire(
    {
    imageUrl: "eivoittoa.png",
    imageHeight: 250,
    title: SelectedItem + "!",
    color: "white",
    confirmButtonColor: "#ff22e2",
    background: "transparent",
    showConfirmButton: false,
    backdrop: `
    transparent
    `
  })
}
// JUO3b
if (Juo3b.includes(Hasil[0])) {
  openbeer.play();
  Swal.fire(
    {
    imageUrl: "olut.png",
    imageHeight: 350,
    title: SelectedItem + "!",
    color: "white",
    confirmButtonColor: "#ff22e2",
    background: "transparent",
    showConfirmButton: false,
    backdrop: `
    transparent
    `
  })
}
//EI VOITTOA 7
if (Eivoittoa7.includes(Hasil[0])) {
  eivoittoa.play();
  Swal.fire(
    {
    imageUrl: "eivoittoa.png",
    imageHeight: 250,
    title: SelectedItem + "!",
    color: "white",
    confirmButtonColor: "#ff22e2",
    background: "transparent",
    showConfirmButton: false,
    backdrop: `
    transparent
    `
  })
}
// JUO2b
if (Juo2b.includes(Hasil[0])) {
  openbeer.play();
  Swal.fire(
    {
    imageUrl: "olut.png",
    imageHeight: 350,
    title: SelectedItem + "!",
    color: "white",
    confirmButtonColor: "#ff22e2",
    background: "transparent",
    showConfirmButton: false,
    backdrop: `
    transparent
    `
  })
}
//EI VOITTOA 8
if (Eivoittoa8.includes(Hasil[0])) {
  eivoittoa.play();
  Swal.fire(
    {
    imageUrl: "eivoittoa.png",
    imageHeight: 250,
    title: SelectedItem + "!",
    color: "white",
    confirmButtonColor: "#ff22e2",
    background: "transparent",
    showConfirmButton: false,
    backdrop: `
    transparent
    `
  })
}
// JUO1b
if (Juo1b.includes(Hasil[0])) {
  openbeer.play();
  Swal.fire(
    {
    imageUrl: "olut.png",
    imageHeight: 350,
    title: SelectedItem + "!",
    color: "white",
    confirmButtonColor: "#ff22e2",
    background: "transparent",
    showConfirmButton: false,
    backdrop: `
    transparent
    `
  })
}
      /*
      pikachu.play();
      Swal.fire(
        {
        imageUrl: "pikachu.gif",
        imageHeight: 250,
        title: SelectedItem + "!",
        color: "white",
        confirmButtonColor: "#ff22e2",
        background: "transparent",
        showConfirmButton: false,
        backdrop: `
        transparent
        `
      })*/
  //TIMER
    }, 5500);
  /*
    // Delay and set to normal state
    setTimeout(function () {
      box.style.setProperty("transition", "initial");
      box.style.transform = "rotate(90deg)";
    }, 6000);
  */
  }
