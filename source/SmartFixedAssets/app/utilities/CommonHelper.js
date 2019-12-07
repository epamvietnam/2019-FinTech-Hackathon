import Images from "./ImageConstants";

export function getImagePath(imageFileName) {
    switch (imageFileName) {
        case "Apartment1.jpg":
            return Images.Apartment1;
        case "Apartment2.jpg":
            return Images.Apartment2;
        case "Apartment3.jpg":
            return Images.Apartment3;
        case "House1.jpg":
            return Images.House1;
        case "House2.jpg":
            return Images.House2;
        case "House3.jpg":
            return Images.House3;
        case "House4.jpg":
            return Images.House4;
        case "House5.jpg":
            return Images.House5;
        case "House6.jpg":
            return Images.House6;
        case "House7.jpg":
            return Images.House7;
        default:
            return Images.Apartment1;
    }
}