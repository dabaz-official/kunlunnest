import Link from 'next/link';

const products = [
  {
    name: '艺术与科学',
    value: '昆仑巢是一个独特的创新空间，它巧妙地融合了艺术的创造力和科学的精确性。在这里，艺术家和科学家携手合作，打破传统界限，共同探索未来的可能性。昆仑巢不仅仅是一个物理空间，更是一个思想的熔炉，是艺术灵感与科学突破相互碰撞，产生令人惊叹的创新成果的地方。从数字艺术到科技装置，昆仑巢正在重新定义艺术与科学的交叉点，为参与者提供一个无限可能的创作平台。',
    href: '/art-science',
  },
  {
    name: '人形机器人',
    value: '在昆仑巢这个充满活力的创新中心，人形机器人技术正在蓬勃发展。这里汇聚了来自不同领域的专家，包括机器人工程师、人工智能研究者和人机交互设计师，他们共同努力推动人形机器人技术的前沿。昆仑巢为这些创新者提供了一个独特的协作环境，使他们能够自由交流想法，共同解决复杂的技术挑战。从提高机器人的动作灵活性到增强其情感交互能力，昆仑巢正在孕育下一代人形机器人，这些机器人有望在未来改变我们的生活和工作方式。',
    href: '/human-shaped-robots',
  },
  {
    name: 'AI 来不来',
    value: '昆仑巢作为一个前沿的科技孵化器，在人工智能领域扮演着关键角色。这里不仅是AI研究者和企业家的聚集地，更是AI创新的试验场。在昆仑巢，你可以看到各种突破性的AI应用，从自然语言处理到计算机视觉，从机器学习算法到神经网络架构。这里的氛围鼓励跨学科合作，促进了AI技术与其他领域的深度融合，如医疗、金融和环境保护等。昆仑巢正在培育下一代AI领袖，他们不仅关注技术创新，还深思AI的伦理和社会影响，致力于开发负责任且造福人类的AI系统。',
    href: '/ai',
  },
]

export function ProductsSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="mt-10 mx-auto grid grid-cols-1 gap-8 pt-10 lg:grid-cols-3 max-w-2xl lg:max-w-none">
          {products.map((product, productIdx) => (
            <div key={productIdx}>
              <div className="flex justify-between items-center text-lg">
                <p className='font-semibold'>
                  {product.name}
                </p>
                <Link
                  href={product.href}
                  className="leading-6 text-blue-600 hover:underline hover:text-blue-500 transition"
                >
                  了解更多 -&gt;
                </Link>
              </div>
              <p
                className="mt-2 text-base leading-7 tracking-tight text-neutral-900"
              >
                {product.value}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
};
