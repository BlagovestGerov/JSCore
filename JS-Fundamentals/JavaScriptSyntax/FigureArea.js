function figureArea(w, h, W, H) {
    let [s1, s2, s3] = [w*h, H*W, Math.min(W,w)*Math.min(H,h)];
    console.log(s1+s2-s3);
};

figureArea(2, 4, 5, 3);
