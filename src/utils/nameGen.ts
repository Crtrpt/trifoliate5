export function nameGen(source: string) {
  var nameSeg = source.split("-");
  var len = nameSeg.length;
  var name = nameSeg.slice(0, len - 1 == 0 ? len : len - 1).join("-");
  var siffix = (parseInt(nameSeg.slice(-1)[0]) || 0) + 1;
  return name + "-" + siffix;
}
