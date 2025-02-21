'use client'

import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-nav border-t border-purple-500/10">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 左侧 - RetroGames */}
                    <div>
                        <Link href="https://retro-games.org/" className="block">
                            <span className="retro-logo text-lg font-semibold text-purple-400 mb-4 block">RetroGames</span>
                        </Link>
                        <p className="text-sm text-gray-400">
                            Experience the nostalgia of <Link href="https://retro-games.org/" className="text-purple-400 hover:text-purple-300 transition-colors">Retro Games</Link> on our website, where you can relive childhood memories with classic titles from Nintendo, Sega, NEC, Atari, PlayStation, and Arcade—all playable online! No download required.
                        </p>
                    </div>

                    {/* 中间 - 链接 */}
                    <div>
                        <span className="text-lg font-semibold text-purple-400 mb-4 block">Others</span>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms-of-service"
                                    className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* 右侧 - Contact Us */}
                    <div>
                        <span className="text-lg font-semibold text-purple-400 mb-4 block">Contact Us</span>
                        <div className="flex flex-col gap-4">
                            <a
                                href="mailto:support@retro-games.org"
                                className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                            >
                                support@retro-games.org
                            </a>
                            <p className="text-sm text-gray-400">
                                Disclaimer: All games on this site are hosted by third parties. We do not host or upload any games. We are not responsible for any content hosted on third party websites. RetroGames is an independent website and is not affiliated with any organizations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 版权信息 */}
                <div className="mt-8 pt-8 border-t border-purple-500/10 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()}{' '}
                        <a
                            href="https://retro-games.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-400 transition-colors"
                        >
                            RetroGames
                        </a>
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
