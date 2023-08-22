import ai from '../../assets/Images/Ai2.jpeg';
import iot from '../../assets/Images/IOT-4.png';
import software from '../../assets/Images/software-development-team.jpeg';
import training from '../../assets/Images/training.webp';
import { SolutionsImages } from '../../Definitions/definitions';

const images = {
  [SolutionsImages.AI]: ai,
  [SolutionsImages.IOT]: iot,
  [SolutionsImages.SOFTWARE]: software,
  [SolutionsImages.TRAINING]: training,
};

const getServicesImages = (key: SolutionsImages) => images[key];

export default getServicesImages;
