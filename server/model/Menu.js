import { Schema, model } from 'mongoose';

const MenuSchema = new Schema({
  // Reference to the Images collection for the menu
  images: [{
    type: Schema.Types.ObjectId,
    ref: 'Images',
  }],
});

const Menu = model('Menu', MenuSchema);

export default Menu;
