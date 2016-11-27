/**
 * Created by Michael on 2015/10/7.
 */
Pattern = {};

Pattern.NonEmptyString = Match.Where(function (x) {
  check(x, String);
  return x.length > 0;
});



function RegExCondition(regEx, x) {
  check(x, String);
  return regEx.test(x);
}
