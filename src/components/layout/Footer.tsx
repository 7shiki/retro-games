'use client'

import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-nav border-t border-purple-500/10">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 左侧 - 关于我们 */}
                    <div>
                        <h3 className="text-lg font-semibold text-purple-400 mb-4">About Us</h3>
                        <p className="text-sm text-gray-400">
                            Experience the nostalgia of Retro Games on our website, where you can relive childhood memories with classic titles from Nintendo, Sega, NEC, Atari, PlayStation, and Arcade—all playable online!
                        </p>
                    </div>

                    {/* 中间 - 链接 */}
                    <div>
                        <h3 className="text-lg font-semibold text-purple-400 mb-4">Others</h3>
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

                    {/* 右侧 - 联系方式 */}
                    <div>
                        <h3 className="text-lg font-semibold text-purple-400 mb-4">Contact Us</h3>
                        <a
                            href="mailto:contact@retrogames.com"
                            className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                        >
                            support@retro-games.org
                        </a>
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
