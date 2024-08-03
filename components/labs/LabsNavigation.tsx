import Title from '@/components/ui/Title';

export default function LabsNavigation() {
  return (
    <div className="bg-white relative isolate -z-10 pt-14">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <Title
          title="开放实验室"
          description="了解昆仑巢的开放实验室。"
        />

        <div className="mt-16 grid grid-cols-1 gap-y-6 sm:mt-20 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src="/images/labs/3d.webp"
              alt="昆仑巢的 3D 打印开放实验室"
              className="object-cover object-center group-hover:opacity-75 transition-all"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="flex items-end p-6">
              <div className="group-hover:ml-2 transition-all">
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    3D 打印开放实验室
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  深入了解 -&gt;
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              src="/images/labs/aigc.webp"
              alt="昆仑巢的 AIGC 开放实验室。"
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full transition-all"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div className="group-hover:ml-2 transition-all">
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    AIGC 开放实验室
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  深入了解 -&gt;
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              src="/images/labs/robot.webp"
              alt="昆仑巢的人形机器人开放实验室。"
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full transition-all"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div className="group-hover:ml-2 transition-all">
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    人形机器人开放实验室
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  深入了解 -&gt;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}