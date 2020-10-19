import Image from '../models/Images';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://192.168.25.20:3333/uploads/${image.path}`,
        }
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
}