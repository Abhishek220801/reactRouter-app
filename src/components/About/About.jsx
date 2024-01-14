export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          
React, a JavaScript library for building user interfaces, has earned fervent admiration from developers globally. Its declarative syntax and component-based architecture empower developers to create dynamic, efficient, and scalable web applications. React's virtual DOM efficiently updates only the necessary components, enhancing performance and user experience. Its one-way data binding simplifies state management, fostering maintainability in complex projects. Moreover, the robust community support and extensive documentation contribute to its widespread popularity.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Passionate developers appreciate React's ability to seamlessly integrate with other technologies and its continuous evolution, making it a cornerstone in modern web development.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
