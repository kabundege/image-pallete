window.onload = e => {
    const img = document.querySelector('img');
    

    const colorThief = new ColorThief();
    let pallete,res;

    // Make sure image is finished loading
    if (img.complete) {
        pallete = colorThief.getPalette(img);
    } else {
      image.addEventListener('load', function() {
        pallete = colorThief.getPalette(img);
      });
    }

    // imager(img)

    res = pallete[1]

    document.body.style.background = `rgb(${res[0]},${res[1]},${res[2]})`
}

const uploadToAws = async (payload) => {
  const res = await fetch('../../assets/images/placeholder.png')
  const blob = (await res).blob();
  console.log("got Blob",blob);

  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    console.log("Upload Finished !!!!!!!!!!!!!!!!!!!!",payload);
    blob.close();
  };
  xhr.onerror = (e) => {
    console.log("Upload Error 0000000000000000000000",e);
    blob.close();
  };
  xhr.onabort = (e) => {
    console.log("Upload Aborted 222222222222222222222");
    blob.close();
  };
  xhr.upload.onprogress = (e) => {
    console.log("Upload Progress 222222222222222222222");
  };
  xhr.open("PUT", payload.url);
  xhr.send(blob);
};

// const numToHex = num => {
//     const hex = num.toString(16);
//     return hex.length == 1 ? "0" + hex : hex;
// }

// const imager = (img) => {
//     const cv = document.createElement('canvas')
//     const cxt = cv.getContext('2d');
//     cxt.drawImage(img,0,0);
//     const { data } = cxt.getImageData(0,0,cv.width,cv.height);

//     console.log(data.length);

//     const greatest = { count:0 , hex:'init' } ,colors = []

//     for(let i=0 ;i<data.length ; i+=4 ){
//         colors.push(`#${numToHex(data[i])}${numToHex(data[i+1])}${numToHex(data[i+2])}${numToHex(data[i+3])}`)
//     }

//     for(const color of colors.slice(1,100)){
//         const exists = colors.filter( el => el === color)

//         if(exists.length > greatest.count ){
//             greatest.count = exists.length;
//             greatest.hex = color;
//         }
//     }
    
//     console.log(color);
//     // document.body.style.background = `rgba(${data[0]},${data[1]},${data[2]},${data[3]/255})`;
// }