function myIsInString(haystack, needle){

    let count = 0;

    let needleCount = 0;

    //compter le nombre de caractère dans haystack
    for (const char of haystack) {

        count++;
    }

    //compter le nombre de caractère dans needle
    for (const need of needle) {

        needleCount++;
    }

    // parcourir haystack 
    for (let i = 0; i <= count - needleCount; i++) {
        let match = true;
        // parcourir needle et comparez chaque caractère
        for (let j = 0; j < needleCount; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break; // Arrêter l'exécution de la boucle si un caractère ne correspond pas
            }
        }

        // Si la needle a été trouvée, renvoie true
        if (match) {
            return true;
        }
    }

    // si la boucle ne trouve pas une chaine de caractère qui correspond renvoie false

    return false;
}

myIsInString('Hello World', 'ello');

myIsInString('Hello World', 'rele');