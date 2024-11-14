import { IoIosMail } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";

function Contact() {
  return (
    <>
    
      <div id="contact">
        <h3 className="flex justify-center font-bold text-2xl m-6">Contacts</h3>
        <div className="dark:bg-gray-900 dark:text-white transition-colors duration-300 p-6 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <form className="p-6 rounded-lg bg-white dark:bg-gray-800">
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Name:</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-transparent dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2">Email:</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md dark:bg-gray-700  dark:border-transparent dark:text-white"
                  placeholder="Your Email"
                />
              </div>
              <button
                type="submit"
                className="block w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition text-center dark:bg-black dark:hover:bg-gray-900"
              >
                Submit
              </button>
            </form>

            <div className="space-y-6 p-10">
              <h1 className="flex justify-center font-bold">Contact Me</h1>
              <div className="p-3 flex item-center rounded-lg bg-white dark:bg-gray-800 m-20 space-x-3">
                <IoIosMail className="text-2xl" />

                <a
                  href="mailto:Ahmed@example.com"
                  className="dark:text-gray-300 hover:underline"
                >
                  Ahmed@example.com
                </a>
              </div>

              <div className="p-3 flex item-center rounded-lg bg-white dark:bg-gray-800 m-20 space-x-3">
                <FaSquarePhone className="text-2xl" />
                <a
                  href="tel:0730000007"
                  className="dark:text-gray-300 hover:underline"
                >
                  073 000 0007
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
