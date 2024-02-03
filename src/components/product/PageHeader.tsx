interface CardProps {
  title: string;
}
const PageHeader = ({ title }: CardProps) => {
  return (
    <>
      <section
        className="w-full mt-4 h-96 bg-[#F1F6F7] justify-center items-center"
        id="contact"
      >
        <div className="flex w-full h-96 justify-center items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-4xl">{title}</h1>
            <div className="flex items-center justify-center mt-4">
              <div className="breadcrumb-item">
                <a href="#">Home - </a>
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
