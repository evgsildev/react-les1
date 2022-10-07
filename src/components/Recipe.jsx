import { BsAlarm, BsBarChart } from 'react-icons/bs';
import { HiOutlineChartPie } from 'react-icons/hi';

export const Recipe = ({
  recipe: { name, time, servings, calories, image },
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <div>
          <BsAlarm />
          <p>{time} mins</p>
        </div>
        <div>
          <HiOutlineChartPie />
          <p>{servings} servings</p>
        </div>
        <div>
          <BsBarChart />
          <p>{calories} calories</p>
        </div>
      </div>
    </div>
  );
};
