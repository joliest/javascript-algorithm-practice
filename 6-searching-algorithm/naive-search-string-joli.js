function searchString(longer, shorter) {
    let count = 0;
    for(i = 0; i < longer.length; i++) {
        for (j = 0; j <= shorter.length; j++) {
          if (longer[i] !== shorter[j]) {
            break;
          } else {
            i++;
          }

          if (j === (shorter.length -1)) {
            count++;
          }
        }
    }
    return count;
}

searchString('wokomgwjomg', 'omg'); //2
/*

w o k o m g w j o m g 
  o m g

*/