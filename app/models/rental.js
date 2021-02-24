import Model, { attr } from '@ember-data/model';

export default class RentalModel extends Model {
  @attr title;
  @attr owner;
  @attr city;
  @attr category;
  @attr image;
  @attr bedrooms;
  @attr description;
}
