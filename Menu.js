//Write an Arrow function to print different menu for different day in a week.

const printMenu = (day) => {
    switch (day.toLowerCase()) {
      case 'monday':
        console.log('Monday Menu: Pav Bhaji');
        break;
      case 'tuesday':
        console.log('Tuesday Menu: Grilled Chicken Salad');
        break;
      case 'wednesday':
        console.log('Wednesday Menu: Pani Puri ');
        break;
      case 'thursday':
        console.log('Thursday Menu: Burgers');
        break;
      case 'friday':
        console.log('Friday Menu: Chinese');
        break;
      case 'saturday':
        console.log('Saturday Menu: Italian');
        break;
      case 'sunday':
        console.log('Sunday Menu: Dosa');
        break;
      default:
        console.log('No Menu');
    }
  };
  printMenu('Monday');
  printMenu('Wednesday');
  printMenu('Sunday');
  printMenu('InvalidDay');
  