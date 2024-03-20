import React from "react";

export const Features = () => {
  return (
    <>
      <section className="relative pt-16 bg-blueGray-50 ml-[10%]">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-orange-400">
                <img
                  alt="Social Media"
                  src="https://cdn.shopify.com/app-store/listing_images/556e0949af6215148272574b0d290e7d/icon/CLuvwunOooIDEAE=.png"
                  className="w-full align-middle rounded-t-lg h-[300px]"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">
                    Connect with Friends and Share Moments
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Our platform makes it easy to stay connected with friends
                    and share your life moments. Whether it's photos, videos, or
                    status updates, you can share it all here.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl mb-1 font-semibold">
                        Friend Connections
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Easily connect and stay updated with your friends'
                        activities and updates.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl mb-1 font-semibold">
                        Multimedia Sharing
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Share photos and videos with your friends and followers
                        effortlessly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl mb-1 font-semibold">Messaging</h6>
                      <p className="mb-4 text-blueGray-500">
                        Stay connected with friends through private messages and
                        group chats.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <h6 className="text-xl mb-1 font-semibold">
                        Notifications
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Get notified about new friend requests, likes, comments,
                        and more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative bg-blueGray-50 pt-8 pb-6 mt-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};
