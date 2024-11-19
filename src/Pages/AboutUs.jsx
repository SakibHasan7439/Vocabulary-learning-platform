const AboutUs = () => {
  return (
    <div className="md:w-[80%] mx-auto lg:w-[70%]">
      <h2 className="font-semibold text-center text-xl md:text-2xl my-4">
        About Me{" "}
      </h2>
      <p className="text-center mb-6">
        I’m a CSE student currently focused on frontend web development. I’m
        passionate about creating interactive and user-friendly web
        applications. I’ve dedicated myself to learning essential tools and
        technologies, and I aim to pursue a remote job in web development after
        sharpening my skills for the next few months.
      </p>
      <h2 className="font-semibold text-xl md:text-2xl mb-4">Skills</h2>
      <h3 className="font-semibold md:text-xl">Frontend development:</h3>
      <ul className="list-disc mb-4">
        <li>Proficient in HTML, CSS, Tailwind CSS, and Bootstrap.</li>
        <li>
          Experience with JavaScript fundamentals and libraries like React.
        </li>
        <li>
          Familiarity with creating dynamic interfaces, modals, sliders, and
          charts.
        </li>
      </ul>
      <h3 className="font-semibold md:text-xl">React:</h3>
      <ul className="list-disc mb-4">
        <li>
          Built projects using React Router, react-awesome-slider, and
          Swiper.js.
        </li>
        <li>
          Currently exploring concepts like the Context API and working with
          external APIs for dynamic data.
        </li>
      </ul>
      <h3 className="font-semibold md:text-xl">Web Design:</h3>
      <ul className="list-disc mb-4">
        <li>
          Skilled in designing layouts with DaisyUI and responsive design using
          Tailwind utilities.
        </li>
      </ul>
      <h3 className="font-semibold md:text-xl">Problem Solving:</h3>
      <ul className="list-disc mb-4 ">
        <li>
          Working on improving JavaScript logic for tasks like dynamic cloning,
          form validation, and managing API data.
        </li>
      </ul>
      <h2 className="font-semibold text-center text-xl md:text-2xl my-4">
        Project{" "}
      </h2>
      <div className="md:grid grid-cols-6 gap-4">
        <div className="col-span-3 border-2 rounded-md p-6">
          <p className="font-semibold text-xl">Portfolio Website:</p>A
          personalized website to showcase skills, projects, and contact
          information, using Tailwind CSS for a polished design.
        </div>

        <div className="col-span-3 border-2 rounded-md p-4">
          <p className="font-semibold text-xl">Real Estate Template: </p>
          Designed with sections like hero areas, portfolios, and carousels,
          integrated with responsive designs and dynamic functionalities.
        </div>

        <div className="col-span-3 border-2 rounded-md p-4">
          <p className="font-semibold text-xl">Country Information App:</p>
          Displays flags and detailed information about countries using API
          data.
        </div>

        <div  className="col-span-3 border-2 rounded-md p-4">
          <p className="font-semibold text-xl">E-commerce Dashboard:</p>
          Visualized data with custom ComposedCharts for product ratings,
          prices, and names.
        </div>

        <div  className="col-span-3 border-2 rounded-md p-4 mb-4">
          <p className="font-semibold text-xl">Bus Seat Booking Form:</p>
          An interactive form with validation and modal integrations for
          passenger details.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
