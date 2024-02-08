interface CardProps {
  title: string;
}
const PageHeader = ({ title }: CardProps) => {
  const heroStyle = {
    width: "100%",
    backgroundImage: ` url(https://benzollubricants.de/wp-content/uploads/2021/01/slide_new.jpg)`,
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <section
        className="w-full mt-4 h-96 justify-center items-center"
        id="contact"
        style={heroStyle}
      >
        <div className="flex w-full h-96 justify-center items-center">
          <div className="flex flex-col text-white">
            <h1 className="font-bold lg:text-6xl md:text-4xl text-2xl">{title}</h1>
            <div className="flex items-center justify-center mt-4 text-white">
              <div className="breadcrumb-item text-white">
                Home -
              </div>
              <div className="breadcrumb-item active" aria-current="page">
                &nbsp;{title}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHeader;
