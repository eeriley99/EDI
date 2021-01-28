function imgPlace(n, dx, dy, XsideLen, YsideLen) {

  var pics = [KG1, KG2, KG3];
  image(pics[n], dx, dy, XsideLen, YsideLen);
  print('KG' + n);

}