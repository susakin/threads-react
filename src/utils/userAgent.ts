function detectFirefox(): boolean {
  // 实现检测Firefox浏览器的逻辑，可以使用 user agent 或其他特征来判断是否为 Firefox 浏览器
  const userAgent = window.navigator.userAgent;
  return /Firefox\//.test(userAgent);
}

function detectChrome(): boolean {
  // 实现检测Chrome浏览器的逻辑，可以使用 user agent 或其他特征来判断是否为 Chrome 浏览器
  const userAgent = window.navigator.userAgent;
  return /Chrome\//.test(userAgent) && !/Edge\//.test(userAgent);
}

function getVersion(): number {
  // 获取浏览器版本号的逻辑，可以从 user agent 中提取版本号信息并进行解析
  const userAgent = window.navigator.userAgent;
  let version = 0;
  const match = userAgent.match(/(Chrome|Firefox)\/(\d+)/);
  if (match && match.length >= 3) {
    version = parseInt(match[2]);
  }
  return version;
}

export function isBrowser(condition: string): boolean {
  if (condition.includes('Firefox')) {
    const version = Number(condition.split('<')[1].trim());
    return detectFirefox() && getVersion() < version;
  } else if (condition.includes('Chrome')) {
    const version = Number(condition.split('>=')[1].trim());

    return detectChrome() && getVersion() >= version;
  }
  return false;
}

export function isPlatform(condition: string): boolean {
  if (condition.includes('iOS')) {
    let versionOperator;
    if (condition.includes('>=')) {
      versionOperator = '>=';
    } else if (condition.includes('>')) {
      versionOperator = '>';
    } else if (condition.includes('<=')) {
      versionOperator = '<=';
    } else if (condition.includes('<')) {
      versionOperator = '<';
    } else {
      throw new Error('Invalid version operator');
    }

    const versionString = condition.split(versionOperator)?.[1];
    const version = Number(versionString.trim());

    return (
      detectIOS() &&
      compareIOSVersion(getIOSVersion(), version, versionOperator)
    );
  }
  return false;
}

function compareIOSVersion(
  currentVersion: number,
  requiredVersion: number,
  operator: string,
): boolean {
  switch (operator) {
    case '>=':
      return currentVersion >= requiredVersion;
    case '>':
      return currentVersion > requiredVersion;
    case '<=':
      return currentVersion <= requiredVersion;
    case '<':
      return currentVersion < requiredVersion;
    default:
      throw new Error('Invalid version operator');
  }
}

function detectIOS(): boolean {
  // 实现检测iOS平台的逻辑
  const userAgent = window.navigator.userAgent;
  return /iP(hone|od|ad)/.test(userAgent);
}

function getIOSVersion(): number {
  // 获取iOS版本号的逻辑
  const userAgent = window.navigator.userAgent;
  const match = userAgent.match(/OS (\d+)_(\d+)_?(\d+)? like Mac OS X/);
  if (match && match.length >= 2) {
    return parseInt(match[1]);
  }
  return 0;
}
