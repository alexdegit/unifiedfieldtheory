import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">统一场论信息站</h3>
            <p className="text-sm leading-relaxed">
              本站客观呈现张祥前统一场论的理论框架与实验验证，不做真假判断，呼吁独立实验复现。
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">快速导航</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/theory/overview" className="hover:text-gold-400 transition-colors">理论总览</Link></li>
              <li><Link href="/experiment/overview" className="hover:text-gold-400 transition-colors">实验验证</Link></li>
              <li><Link href="/comparison/navy-patents" className="hover:text-gold-400 transition-colors">海军专利对比</Link></li>
              <li><Link href="/about/zhang" className="hover:text-gold-400 transition-colors">关于张祥前</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">免责声明</h3>
            <p className="text-sm leading-relaxed">
              本站内容基于张祥前公开发表的理论与实验资料整理。我们不对理论的正确性做出判断，鼓励读者以科学态度独立验证。
            </p>
          </div>
        </div>
        <div className="border-t border-primary-700 mt-8 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} 统一场论信息站. 保留所有权利.
        </div>
      </div>
    </footer>
  );
}
